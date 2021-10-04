import 'package:flutter/material.dart';
import 'package:procure_tech/screens/purchase/new/new_order.dart';
import 'package:procure_tech/screens/purchase/pending/pending.dart';

class TabbedNavBar extends StatelessWidget {
  const TabbedNavBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      initialIndex: 0,
      length: 5,
      child: Scaffold(
        appBar: AppBar(
          title: Center(
            child: Text("Procure App"),
          ),
          bottom: TabBar(
            isScrollable: true,
            tabs: [
              Container(
                width: 100.0,
                child: Center(
                  child: Text(
                    "Add",
                    style: TextStyle(
                      fontSize: 18.0,
                    ),
                  ),
                ),
              ),
              Container(
                  width: 100.0,
                  child: Center(
                    child: Text(
                      "New",
                      style: TextStyle(
                        fontSize: 18.0,
                      ),
                    ),
                  )),
              Container(
                  width: 100.0,
                  child: Center(
                    child: Text(
                      "Pending",
                      style: TextStyle(
                        fontSize: 18.0,
                      ),
                    ),
                  )),
              Container(
                width: 100.0,
                child: Center(
                  child: Text(
                    "Approved",
                    style: TextStyle(
                      fontSize: 18.0,
                    ),
                  ),
                ),
              ),
              Container(
                width: 100.0,
                child: Center(
                  child: Text(
                    "Declined",
                    style: TextStyle(
                      fontSize: 18.0,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            Center(
              child: PurchaseOrder(),
            ),
            Center(
              child: PendingSection(),
            ),
            Center(
              child: Text("Tab pending view"),
            ),
            Center(
              child: Text("Tab 3 view"),
            ),
            Center(
              child: Text("Tab 4 view"),
            ),
          ],
        ),
      ),
    );
  }
}
