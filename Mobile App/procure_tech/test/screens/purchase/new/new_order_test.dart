import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:procure_tech/screens/purchase/new/new_order.dart';

void main() {
  testWidgets('new order ...', (WidgetTester tester) async {
    await tester.pumpWidget(PurchaseOrder());
    var textField = find.byType(TextFormField);
    expect(textField, findsOneWidget);
    await tester.enterText(textField, "Hello");
    expect(find.text("Hello"), findsOneWidget);
  });
}
