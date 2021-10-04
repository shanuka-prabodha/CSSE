import 'dart:convert';

import 'package:flutter/material.dart';
import 'accessories/card.dart';
import 'package:http/http.dart' as http;

class ApproveSection extends StatefulWidget {
  const ApproveSection({Key? key}) : super(key: key);

  @override
  _ApproveSectionState createState() => _ApproveSectionState();
}

class _ApproveSectionState extends State<ApproveSection> {
  var _purchaseDetails = [];

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getPurchases();
  }

  void getPurchases() async {
    final response =
        await http.get(Uri.parse('http://172.25.80.1:8020/order/approved'));
    final jsonData = jsonDecode(response.body) as List;

    setState(() {
      _purchaseDetails = jsonData;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: _purchaseDetails.length,
        itemBuilder: (context, i) {
          final post = _purchaseDetails[i];
          return CardComponent(post);
        });
  }
}
