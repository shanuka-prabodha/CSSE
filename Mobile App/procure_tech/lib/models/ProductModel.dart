import 'dart:convert';

ProductModel dataModelFromJSON(String str) =>
    ProductModel.fromJson(jsonDecode(str));
String dataModelToJson(ProductModel product) => json.encode(product.toJson());

class ProductModel {
  ProductModel({required this.name, required this.quantity});

  String name;
  int quantity;

  factory ProductModel.fromJson(Map<String, dynamic> json) =>
      ProductModel(name: json['name'], quantity: json['quantity']);

  Map<String, dynamic> toJson() => {"name": name, "quantity": quantity};
}
