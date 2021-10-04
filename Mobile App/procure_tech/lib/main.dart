import 'package:flutter/material.dart';
import './screens/navbar/tabbed_nav.dart';

void main() {
  runApp(MyApp());
}

const primaryColor = Color(0xFF4849AB);
const accentColor = Color(0xFF4849AB);

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      //theme: ThemeData.dark(),
      theme: ThemeData(
        primaryColor: primaryColor,
        accentColor: accentColor,
      ),
      home: TabbedNavBar(),
    );
  }
}
