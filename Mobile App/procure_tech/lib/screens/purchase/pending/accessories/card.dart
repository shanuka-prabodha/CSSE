import 'package:flutter/material.dart';

class CardComponent extends StatelessWidget {
  final post;
  CardComponent(this.post);

  @override
  Widget build(BuildContext context) {
    String submitedDate = post['OrderDate'].toString();
    String deliveryDate = post['DeliveryDate'].toString();
    int itemCount = post['items'].length;
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
                            Text('Due Date:'),
                          ),
                          DataCell(
                            Text('$deliveryDate'),
                          ),
                        ],
                      ),
                      DataRow(
                        cells: <DataCell>[
                          DataCell(Text('Submitted Date:')),
                          DataCell(Text('$submitedDate')),
                        ],
                      ),
                      DataRow(
                        cells: <DataCell>[
                          DataCell(Text('Items:')),
                          DataCell(Text('$itemCount')),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              Expanded(
                flex: 1,
                child: Center(
                  child: Column(
                    children: [
                      Text("Priority"),
                      OutlinedButton(
                        onPressed: () => {},
                        child: Text(
                          "Kavishka",
                          style: TextStyle(color: Colors.white),
                        ),
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
