import 'dart:convert';

DataModel dataModelFromJSON(String str) => DataModel.fromJson(jsonDecode(str));
String dataModelToJson(DataModel data) => json.encode(data.toJson());

class DataModel {
  DataModel({required this.title, required this.id, required this.today});

  String title;
  String id;
  String today;

  factory DataModel.fromJson(Map<String, dynamic> json) =>
      DataModel(title: json['title'], id: json['id'], today: json['today']);

  Map<String, dynamic> toJson() => {"title": title, "id": id, "today": today};
}
