import 'dart:convert';
import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:procure_tech/models/DataModel.dart';
import 'package:http/http.dart' as http;
import 'package:procure_tech/screens/purchase/accessories/productCard.dart';

import 'add_products.dart';

class PurchaseOrder extends StatefulWidget {
  @override
  _PurchaseOrderState createState() => _PurchaseOrderState();
}

Future<DataModel?> submitData(String title, String today, String selectedDay,
    var productDetails, var supplier, String dropdownValue, int total) async {
  String admin;

  if (total > 10000) {
    admin = "New";
  } else {
    admin = "else";
  }

  var response = await http.post(
    //Uri.http('172.31.0.1:8020', 'order/create'),
    Uri.parse('http://172.25.80.1:8020/order/create'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({
      "Description": title,
      "OrderDate": today,
      "DeliveryDate": selectedDay,
      "AdminApproval": admin,
      "PassedState": "New",
      "items": productDetails,
      "AssignSupplier": supplier,
      "Priority": dropdownValue,
      "TotalPrice": total
    }),
  );

  await http.delete(Uri.parse('http://172.25.80.1:8020/product/delete'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      });

  print(productDetails);

  if (response.statusCode == 201) {
    String responseString = response.body;
    return dataModelFromJSON(responseString);
  } else
    return null;
}

class _PurchaseOrderState extends State<PurchaseOrder> {
  String today = DateFormat('yyyy-MM-dd').format(DateTime.now());
  DateTime selectedDay = DateTime.now();
  late DataModel _dataModel;
  TextEditingController titleController = TextEditingController();
  late Widget buildProductAdd;

  var _productDetails = [];
  var _supplierDetails = [];

  String dropdownValue = 'High';

  int total = 0;

  var supplier;

  Future<Null> selectedTimePicker(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: selectedDay,
      lastDate: DateTime(2100),
      firstDate: DateTime.now(),
    );

    if (picked != null && picked != selectedDay) {
      setState(() {
        selectedDay = picked;
      });
    }
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getPurchases();
    getSupliers();
  }

  Future<List> getPurchases() async {
    final response =
        await http.get(Uri.parse('http://172.25.80.1:8020/product/product'));
    final jsonData = jsonDecode(response.body) as List;

    setState(() {
      _productDetails = jsonData;
    });
    getTotal();
    return _productDetails;
  }

  void getTotal() async {
    final responseTota =
        await http.get(Uri.parse('http://172.25.80.1:8020/product/total'));

    //Map<String, dynamic> jsonDataSup = json.decode(responseTota.body);
    int data = json.decode(responseTota.body)["total"];
    total = data;

    print(total);
  }

  void getSupliers() async {
    final responseSup = await http
        .get(Uri.parse('http://172.25.80.1:8020/supplier/readSupplier'));
    //final jsonDataSup = jsonDecode(responseSup.body) as List;

    Map<String, dynamic> jsonDataSup = json.decode(responseSup.body);
    List<dynamic> data = jsonDataSup["data"];

    setState(() {
      _supplierDetails = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

    return Container(
      child: SingleChildScrollView(
        physics: ScrollPhysics(),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 30.0),
          child: Column(
            children: [
              TextFormField(
                decoration: const InputDecoration(
                  hintText: 'Title',
                ),
                controller: titleController,
              ),
              SizedBox(
                height: 50.0,
              ),
              Text(
                "Submitted date: $today",
                style: TextStyle(color: Color(0xFF4849AB), fontSize: 20.0),
              ),
              SizedBox(
                height: 30.0,
              ),
              Row(
                children: [
                  Text(
                    "Due date:",
                    style: TextStyle(color: Color(0xFF4849AB), fontSize: 20.0),
                  ),
                  Text(DateFormat('yyyy-MM-dd').format(selectedDay),
                      style:
                          TextStyle(color: Color(0xFF4849AB), fontSize: 20.0)),
                ],
              ),
              FlatButton(
                onPressed: () {
                  selectedTimePicker(context);
                },
                child: Container(
                  width: 50.0,
                  height: 50.0,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Color(0xFF4849AB),
                  ),
                  child: Icon(
                    Icons.calendar_today,
                    color: Colors.white,
                  ),
                ),
              ),
              Row(
                children: [
                  Expanded(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: OutlinedButton(
                        onPressed: () async {
                          String title = titleController.text;
                          DataModel? data = await submitData(
                              title,
                              today,
                              DateFormat('yyyy-MM-dd').format(selectedDay),
                              _productDetails,
                              supplier,
                              dropdownValue,
                              total);
                          setState(() {
                            if (data != null) {
                              _dataModel = data;
                            }
                          });
                        },
                        child: Text("Submit"),
                      ),
                    ),
                  ),
                  Expanded(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: OutlinedButton(
                        onPressed: () => {},
                        child: Text("Clear"),
                      ),
                    ),
                  ),
                  Expanded(
                    child: FloatingActionButton(
                      onPressed: () => {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => AddProducts(),
                          ),
                        ),
                        setState(() {
                          getPurchases();
                        })
                      },
                      child: Icon(Icons.add),
                    ),
                  ),
                ],
              ),
              Text('Priority: '),
              DropdownButton<String>(
                hint: Text('Select Priority'),
                value: dropdownValue,
                elevation: 16,
                onChanged: (String? newValue) {
                  setState(() {
                    dropdownValue = newValue!;
                  });
                },
                items: <String>['High', 'Medium', 'Low']
                    .map<DropdownMenuItem<String>>((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
              ),
              DropdownButton(
                hint: Text('Select Supplier'),
                items: _supplierDetails.map((list) {
                  return DropdownMenuItem(
                    child: Text(list['Name']),
                    value: list['_id'].toString(),
                  );
                }).toList(),
                onChanged: (value) {
                  setState(() {
                    supplier = value;
                  });
                  print(supplier);
                },
                value: supplier,
              ),
              Text("Total: $total"),
              RefreshIndicator(
                onRefresh: getPurchases,
                child: ListView.builder(
                    physics: AlwaysScrollableScrollPhysics(),
                    shrinkWrap: true,
                    itemCount: _productDetails.length,
                    itemBuilder: (context, i) {
                      final product = _productDetails[i];
                      return ProductCard(product);
                    }),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/*
class AddedProducts extends StatefulWidget {
  const AddedProducts({Key? key}) : super(key: key);

  @override
  _AddedProductsState createState() => _AddedProductsState();
}

class _AddedProductsState extends State<AddedProducts> {
  var _productDetails = [];

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getPurchases();
  }

  void getPurchases() async {
    final response =
        await http.get(Uri.parse('http://172.25.80.1:8020/product/product'));
    final jsonData = jsonDecode(response.body) as List;
    print(jsonData);

    setState(() {
      _productDetails = jsonData;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: _productDetails.length,
        itemBuilder: (context, i) {
          final product = _productDetails[i];
          return ProductCard(product);
        });
  }
}
*/
