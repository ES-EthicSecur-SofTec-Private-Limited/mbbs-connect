# MBBS Connect - Medical Student Networking App

A LinkedIn-like mobile application specifically designed for MBBS (Bachelor of Medicine, Bachelor of Surgery) students and medical colleges. This app allows medical students to connect, share experiences, view posts, comment on them, and find top medical colleges worldwide.

## 🏥 Features

### Core Features
- **User Authentication**: Login and registration system for medical students
- **Social Feed**: View posts from other MBBS students with like and comment functionality
- **College Directory**: Browse and search top medical colleges with detailed information
- **Post Creation**: Create posts with text, images, and medical-specific tags
- **User Profiles**: Complete user profiles with academic information and statistics
- **Real-time Interactions**: Like posts, add comments, and engage with the community

### College Information
- **College Ratings**: View ratings and reviews of medical colleges
- **Admission Details**: Admission rates, fees (domestic and international)
- **Specialties**: Information about medical specialties offered
- **Student Statistics**: Total student count and other relevant data
- **Location Information**: College locations and contact details

### User Experience
- **Modern UI**: Clean, professional interface designed for medical professionals
- **Responsive Design**: Optimized for both iOS and Android devices
- **Intuitive Navigation**: Easy-to-use bottom tab navigation
- **Search Functionality**: Search colleges by name or location
- **Tag System**: Medical-specific tags for better content organization

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MBBSConnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your physical device

## 📱 App Structure

```
MBBSConnect/
├── App.tsx                 # Main app component with navigation
├── index.js               # App entry point
├── package.json           # Dependencies and scripts
├── app.json              # Expo configuration
├── tsconfig.json         # TypeScript configuration
├── src/
│   ├── screens/          # Screen components
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── CollegesScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── PostDetailScreen.tsx
│   │   └── CreatePostScreen.tsx
│   ├── types/            # TypeScript type definitions
│   │   └── navigation.ts
│   └── utils/            # Utility functions and mock data
│       └── mockData.ts
└── assets/               # Images and static assets
```

## 🎯 Key Screens

### 1. Login/Register Screens
- Beautiful authentication UI
- Form validation
- Smooth navigation between login and registration

### 2. Home Screen (Feed)
- Displays posts from MBBS students
- Like and comment functionality
- Pull-to-refresh
- Create post button

### 3. Colleges Screen
- List of top medical colleges
- Search and filter functionality
- Detailed college information
- Rating system

### 4. Profile Screen
- User profile information
- Academic details
- Settings and preferences
- Quick actions

### 5. Post Detail Screen
- Full post view with comments
- Add new comments
- Like/unlike functionality
- Comment interactions

### 6. Create Post Screen
- Rich text input
- Image attachment (simulated)
- Tag system with medical-specific tags
- Character count and validation

## 🛠 Technology Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Navigation between screens
- **Expo Vector Icons**: Icon library
- **AsyncStorage**: Local data storage

## 📊 Mock Data

The app includes comprehensive mock data for:
- **Users**: Medical students with profiles
- **Posts**: Sample posts with medical content
- **Colleges**: Top medical colleges worldwide
- **Comments**: Sample comments on posts

## 🎨 Design Features

- **Medical Theme**: Healthcare-focused color scheme and icons
- **Professional UI**: Clean, modern interface suitable for medical professionals
- **Responsive Layout**: Adapts to different screen sizes
- **Accessibility**: Proper contrast and touch targets
- **Smooth Animations**: Enhanced user experience

## 🔧 Customization

### Adding New Features
1. Create new screen components in `src/screens/`
2. Add navigation routes in `App.tsx`
3. Update TypeScript types in `src/types/navigation.ts`
4. Add mock data in `src/utils/mockData.ts`

### Styling
- All styles are defined using StyleSheet
- Consistent color scheme throughout the app
- Responsive design patterns

## 📱 Platform Support

- **iOS**: Full support with native iOS components
- **Android**: Full support with native Android components
- **Web**: Can be adapted for web deployment

## 🚀 Deployment

### Expo Build
```bash
# Build for iOS
expo build:ios

# Build for Android
expo build:android
```

### App Store Deployment
1. Configure app.json with proper app details
2. Build the app using Expo build service
3. Submit to App Store Connect (iOS) or Google Play Console (Android)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- **Real-time Chat**: Direct messaging between students
- **Study Groups**: Create and join study groups
- **Exam Preparation**: Study materials and practice tests
- **Clinical Rotations**: Schedule and track clinical experiences
- **Research Collaboration**: Find research partners
- **Job Board**: Medical job opportunities
- **Mentorship Program**: Connect with senior medical professionals
- **Video Calls**: Virtual study sessions and consultations

---

**MBBS Connect** - Connecting Medical Students Worldwide 🏥 