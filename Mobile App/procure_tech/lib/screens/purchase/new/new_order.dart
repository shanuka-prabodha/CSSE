import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:procure_tech/models/DataModel.dart';
import 'package:http/http.dart' as http;

class PurchaseOrder extends StatefulWidget {
  @override
  _PurchaseOrderState createState() => _PurchaseOrderState();
}

Future<DataModel?> submitData(String title, String today) async {
  var response = await http.post(
    //Uri.http('172.31.0.1:8020', 'order/create'),
    Uri.parse('http://172.31.0.1:8020/order/create'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({"Description": title, "OrderDate": today}),
  );
  print(title);
  var data = response.body;
  print(data);

  if (response.statusCode == 201) {
    String responseString = response.body;
    return dataModelFromJSON(responseString);
  } else
    return null;
}

class _PurchaseOrderState extends State<PurchaseOrder> {
  String today = DateFormat('yyyy-MM-dd').format(DateTime.now());
  late DataModel _dataModel;
  TextEditingController titleController = TextEditingController();
  late Widget buildProductAdd;

  @override
  Widget build(BuildContext context) {
    final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
    return Container(
      child: Column(
        children: [
          TextFormField(
            decoration: const InputDecoration(
              hintText: 'Enter your email',
            ),
            controller: titleController,
          ),
          Text("Submitted date: $today"),
          Text("Due date:"),
          Row(
            children: [
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: OutlinedButton(
                    onPressed: () async {
                      String title = titleController.text;
                      DataModel? data = await submitData(title, today);
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
                    child: Text("Button2"),
                  ),
                ),
              ),
              Expanded(
                child: FloatingActionButton(
                  onPressed: () => {
                    showModalBottomSheet(
                        context: context,
                        builder: (BuildContext context) => ProductAdd())
                  },
                  child: Icon(Icons.add),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class ProductAdd extends StatelessWidget {
  const ProductAdd({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Container(
        padding: EdgeInsets.symmetric(vertical: 20.0, horizontal: 40.0),
        decoration: BoxDecoration(
          color: Color(0xff3c4042),
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(40.0),
            topRight: Radius.circular(40.0),
          ),
        ),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Text(
                'Add a new Product.',
                style: TextStyle(
                  fontSize: 28.0,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 10.0),
              child: TextField(
                decoration: InputDecoration(
                  hintText: 'Product name',
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 10.0),
              child: TextField(
                decoration: InputDecoration(hintText: 'Product quantity'),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 20.0, bottom: 10.0),
              child: Text(
                'Total price',
                style: TextStyle(
                  fontSize: 28.0,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 40.0),
              child: Text(
                'Rs. 200.00',
                style: TextStyle(
                  fontSize: 35.0,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
            ElevatedButton(
              onPressed: () {},
              child: Text('Add product'),
            )
          ],
        ),
      ),
    );
  }
}
