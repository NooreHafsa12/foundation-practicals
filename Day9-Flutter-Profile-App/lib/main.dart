import 'package:flutter/material.dart';

void main() {
  runApp(const ProfileApp());
}

class ProfileApp extends StatelessWidget {
  const ProfileApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Noor Profile',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor: const Color(0xfff4f7fb),
      ),
      home: const ProfileScreen(),
    );
  }
}

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  Widget sectionTitle(String title) {
    return Padding(
      padding: const EdgeInsets.only(top: 24, bottom: 10),
      child: Text(
        title,
        style: const TextStyle(
          fontSize: 21,
          fontWeight: FontWeight.bold,
          color: Color(0xff0f172a),
        ),
      ),
    );
  }

  Widget infoCard(IconData icon, String title, String subtitle) {
    return Card(
      elevation: 3,
      margin: const EdgeInsets.only(bottom: 12),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: Colors.blue.shade50,
          child: Icon(icon, color: Colors.blue),
        ),
        title: Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
        subtitle: Text(subtitle),
      ),
    );
  }

  Widget skillChip(String skill) {
    return Chip(
      label: Text(skill),
      backgroundColor: Colors.blue.shade50,
      labelStyle: const TextStyle(color: Colors.blue),
    );
  }

  @override
  Widget build(BuildContext context) {
    final skills = [
      'HTML',
      'CSS',
      'JavaScript',
      'Java Basics',
      'Python Basics',
      'MySQL',
      'GitHub',
      'Flutter',
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('My Professional Profile'),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(18),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(24),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xff2563eb), Color(0xff0f172a)],
                ),
                borderRadius: BorderRadius.circular(24),
              ),
              child: const Column(
                children: [
                  CircleAvatar(
                    radius: 55,
                    backgroundColor: Colors.white,
                    child: Icon(Icons.person, size: 70, color: Colors.blue),
                  ),
                  SizedBox(height: 14),
                  Text(
                    'Shaik Noore Hafsa',
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  Text(
                    'CSE Student | Web Developer | Flutter Learner',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.white70),
                  ),
                ],
              ),
            ),

            sectionTitle('About Me'),
            const Text(
              'Computer Science student with knowledge of HTML, CSS, JavaScript, Java, Python, MySQL, GitHub, and Flutter. Passionate about building responsive web and mobile applications with clean UI and user-friendly design.',
              style: TextStyle(fontSize: 16),
            ),

            sectionTitle('Skills'),
            Wrap(
              spacing: 10,
              runSpacing: 8,
              children: skills.map((skill) => skillChip(skill)).toList(),
            ),

            sectionTitle('Internship Experience'),
            infoCard(
              Icons.work,
              'Web Development Intern - Avishkarana',
              'Current internship focused on HTML, CSS, JavaScript, GitHub, responsive design, and Flutter practicals.',
            ),
            infoCard(
              Icons.computer,
              'Python Intern - Supreme Info Solutions',
              'Built a Fake News Detection web app using Python and ML with responsive UI integration.',
            ),

            sectionTitle('Projects'),
            infoCard(
              Icons.analytics,
              'GitHub Repository Analyzer',
              'Python, Flask, HTML, CSS, JavaScript, and GitHub API based analytics project.',
            ),
            infoCard(
              Icons.account_balance_wallet,
              'SmartExpend',
              'Flutter expense tracking app with Firebase Authentication and Firestore.',
            ),
            infoCard(
              Icons.verified,
              'Fake News Detection App',
              'ML-based web app to classify news credibility with real-time results.',
            ),

            sectionTitle('Education'),
            infoCard(
              Icons.school,
              'B.Tech Computer Science',
              'Narayana College of Engineering, Nellore | CGPA: 9.01',
            ),
            infoCard(
              Icons.school_outlined,
              'Diploma in Computer Engineering',
              'Govt Polytechnic for Women | Percentage: 82%',
            ),

            sectionTitle('Contact'),
            infoCard(Icons.email, 'Email', 'shaik.noorehafsa@gmail.com'),
            infoCard(Icons.phone, 'Phone', '+91 8985588836'),
          ],
        ),
      ),
    );
  }
}
