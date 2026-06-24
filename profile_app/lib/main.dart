import 'package:flutter/material.dart';

void main() {
  runApp(const ProfileApp());
}

class ProfileApp extends StatelessWidget {
  const ProfileApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Student Profile App',
      home: const ProfileScreen(),
    );
  }
}

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Student Profile'),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            const CircleAvatar(
              radius: 60,
              child: Icon(Icons.person, size: 70),
            ),
            const SizedBox(height: 20),
            const Text(
              'Shaik Noore Hafsa',
              style: TextStyle(
                fontSize: 26,
                fontWeight: FontWeight.bold,
              ),
            ),
            const Text(
              'B.Tech CSE Student',
              style: TextStyle(fontSize: 18),
            ),
            const SizedBox(height: 20),
            const Card(
              child: ListTile(
                leading: Icon(Icons.email),
                title: Text('Email'),
                subtitle: Text('noorehafsa.shaik@gmail.com'),
              ),
            ),
            const Card(
              child: ListTile(
                leading: Icon(Icons.school),
                title: Text('Education'),
                subtitle: Text('B.Tech Computer Science Engineering'),
              ),
            ),
            const Card(
              child: ListTile(
                leading: Icon(Icons.code),
                title: Text('Skills'),
                subtitle: Text('HTML, CSS, JavaScript, Flutter, GitHub'),
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                debugPrint('Profile button clicked');
              },
              child: const Text('View Projects'),
            ),
          ],
        ),
      ),
    );
  }
}