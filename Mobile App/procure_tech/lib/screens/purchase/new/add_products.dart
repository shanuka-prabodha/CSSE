import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:procure_tech/models/ProductModel.dart';

class AddProducts extends StatefulWidget {
  @override
  _AddProductsState createState() => _AddProductsState();
}

Future<ProductModel?> submitData(
    String name, int quentity, double price) async {
  var response = await http.post(
    //Uri.http('172.31.0.1:8020', 'order/create'),
    Uri.parse('http://172.25.80.1:8020/product/add'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({
      "name": name,
      "quantity": quentity,
      "discription": "Kavishka",
      "unitPrice": price
    }),
  );

  if (response.statusCode == 201) {
    String responseString = response.body;
    return dataModelFromJSON(responseString);
  } else
    return null;
}

class _AddProductsState extends State<AddProducts> {
  late ProductModel _productModel;
  TextEditingController nameController = TextEditingController();
  TextEditingController quentityController = TextEditingController();
  TextEditingController priceController = TextEditingController();
  late Widget buildProductAdd;

  @override
  Widget build(BuildContext context) {
    final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
    return SafeArea(
      child: Scaffold(
        body: Container(
          child: Column(
            children: [
              TextFormField(
                decoration: const InputDecoration(
                  hintText: 'Product name',
                ),
                controller: nameController,
              ),
              TextFormField(
                decoration: const InputDecoration(
                  hintText: 'Product quentity',
                ),
                keyboardType: TextInputType.number,
                controller: quentityController,
              ),
              TextFormField(
                decoration: const InputDecoration(
                  hintText: 'Unit price',
                ),
                keyboardType: TextInputType.number,
                controller: priceController,
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: OutlinedButton(
                  onPressed: () async {
                    String name = nameController.text;
                    int quentity = int.parse(quentityController.text);
                    double price = double.parse(quentityController.text);
                    ProductModel? product =
                        await submitData(name, quentity, price);
                    setState(() {
                      if (product != null) {
                        _productModel = product;
                      }
                    });
                  },
                  child: Text("Submit"),
                ),
              ),
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                  setState(() {
                    AddProducts();
                  });
                },
                child: Text('Back'),
              )
            ],
          ),
        ),
      ),
    );
  }
}
