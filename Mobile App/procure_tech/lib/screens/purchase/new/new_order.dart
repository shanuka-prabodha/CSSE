import 'dart:convert';

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

Future<DataModel?> submitData(
    String title, String today, String selectedDay, var productDetails) async {
  var response = await http.post(
    //Uri.http('172.31.0.1:8020', 'order/create'),
    Uri.parse('http://172.25.80.1:8020/order/create'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({
      "Description": title,
      "OrderDate": today,
      "DeliveryDate": selectedDay,
      "AdminApproval": "New",
      "PassedState": "New",
      "items": productDetails,
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
    final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
    return Container(
      child: SingleChildScrollView(
        physics: ScrollPhysics(),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0),
          child: Column(
            children: [
              TextFormField(
                decoration: const InputDecoration(
                  hintText: 'Title',
                ),
                controller: titleController,
              ),
              Text("Submitted date: $today"),
              Row(
                children: [
                  Text("Due date:"),
                  Text(DateFormat('yyyy-MM-dd').format(selectedDay)),
                  FlatButton(
                      onPressed: () {
                        selectedTimePicker(context);
                      },
                      child: Text('Date Pick'))
                ],
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
                              _productDetails);
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
              ListView.builder(
                  physics: NeverScrollableScrollPhysics(),
                  shrinkWrap: true,
                  itemCount: _productDetails.length,
                  itemBuilder: (context, i) {
                    final product = _productDetails[i];
                    return ProductCard(product);
                  }),
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
