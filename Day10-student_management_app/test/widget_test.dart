import 'package:flutter_test/flutter_test.dart';
import 'package:student_management_app/main.dart';

void main() {
  testWidgets('App loads', (WidgetTester tester) async {
    await tester.pumpWidget(const StudentManagementApp());
  });
}
