import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:procure_tech/screens/purchase/new/add_products.dart';

void main() {
  testWidgets('new order ...', (WidgetTester tester) async {
    await tester.pumpWidget(AddProducts());
    var textField = find.byType(TextFormField);
    expect(textField, findsOneWidget);
    await tester.enterText(textField, "Hello");
    expect(find.text("Hello"), findsOneWidget);
  });
}
