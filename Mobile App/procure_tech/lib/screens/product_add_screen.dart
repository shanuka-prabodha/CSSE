import 'package:flutter/material.dart';

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
