import 'package:flutter/material.dart';

class ProductCard extends StatelessWidget {
  final product;
  ProductCard(this.product);

  @override
  Widget build(BuildContext context) {
    String name = product['name'].toString();
    String quentity = product['quantity'].toString();
    return Container(
      color: Colors.blue,
      margin: EdgeInsets.all(10.0),
      padding: EdgeInsets.all(10.0),
      child: Column(
        children: [
          Text(
            "Purchase preorder date",
            style: TextStyle(fontSize: 20.0, color: Colors.black),
          ),
          Row(
            children: [
              Expanded(
                flex: 3,
                child: Center(
                  child: DataTable(
                    dividerThickness: 0,
                    headingRowHeight: 0,
                    dataRowHeight: 25,
                    columns: <DataColumn>[
                      DataColumn(
                        label: Text(
                          '',
                        ),
                      ),
                      DataColumn(
                        label: Text(
                          '',
                          style: TextStyle(fontStyle: FontStyle.italic),
                        ),
                      ),
                    ],
                    rows: <DataRow>[
                      DataRow(
                        cells: <DataCell>[
                          DataCell(
                            Text('Name:'),
                          ),
                          DataCell(
                            Text('$name'),
                          ),
                        ],
                      ),
                      DataRow(
                        cells: <DataCell>[
                          DataCell(Text('Quantity:')),
                          DataCell(Text('$quentity')),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
