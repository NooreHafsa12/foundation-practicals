import 'package:flutter_test/flutter_test.dart';
import 'package:profile_app/main.dart';

void main() {
  testWidgets('Profile App loads successfully', (WidgetTester tester) async {
    await tester.pumpWidget(const ProfileApp());

    expect(find.text('Shaik Noore Hafsa'), findsOneWidget);
  });
}
