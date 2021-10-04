import 'package:flutter/material.dart';
import 'package:procure_tech/screens/purchase/new/new_order.dart';
import 'package:procure_tech/screens/purchase/pending/approved.dart';
import 'package:procure_tech/screens/purchase/pending/decline.dart';
import 'package:procure_tech/screens/purchase/pending/new.dart';
import 'package:procure_tech/screens/purchase/pending/pending.dart';

class TabbedNavBar extends StatelessWidget {
  const TabbedNavBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      initialIndex: 0,
      length: 5,
      child: Scaffold(
        backgroundColor: Color(0xFFECEBF1),
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
            PurchaseOrder(),
            Center(
              child: NewSection(),
            ),
            Center(
              child: PendingSection(),
            ),
            Center(
              child: ApproveSection(),
            ),
            Center(
              child: DeclineSection(),
            ),
          ],
        ),
      ),
    );
  }
}
