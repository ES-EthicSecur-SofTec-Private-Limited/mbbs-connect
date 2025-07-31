import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types/navigation';

type CreatePostScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreatePost'>;

const CreatePostScreen: React.FC = () => {
  const navigation = useNavigation<CreatePostScreenNavigationProp>();
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const commonTags = [
    'MBBS', 'MedicalSchool', 'Anatomy', 'Physiology', 'Surgery', 
    'Cardiology', 'Neurology', 'Pediatrics', 'StudyGroup', 'ExamPrep',
    'ClinicalRotation', 'Research', 'CaseStudy', 'MedicalTips'
  ];

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSelectImage = () => {
    // In a real app, this would open image picker
    Alert.alert(
      'Add Image',
      'Image picker functionality would be implemented here',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Simulate', 
          onPress: () => {
            setSelectedImage('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop');
          }
        }
      ]
    );
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleCreatePost = async () => {
    if (!content.trim()) {
      Alert.alert('Error', 'Please write something to post');
      return;
    }

    setIsLoading(true);

    // Simulate post creation
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        'Success',
        'Your post has been created successfully!',
        [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]
      );
    }, 2000);
  };

  const handleCancel = () => {
    if (content.trim() || selectedImage) {
      Alert.alert(
        'Discard Post',
        'Are you sure you want to discard this post?',
        [
          { text: 'Keep Editing', style: 'cancel' },
          { text: 'Discard', style: 'destructive', onPress: () => navigation.goBack() }
        ]
      );
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Post</Text>
          <TouchableOpacity
            style={[styles.postButton, (!content.trim() || isLoading) && styles.postButtonDisabled]}
            onPress={handleCreatePost}
            disabled={!content.trim() || isLoading}
          >
            <Text style={[styles.postButtonText, (!content.trim() || isLoading) && styles.postButtonTextDisabled]}>
              {isLoading ? 'Posting...' : 'Post'}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Post Content */}
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.contentInput}
              placeholder="What's on your mind? Share your medical journey, study tips, or experiences..."
              value={content}
              onChangeText={setContent}
              multiline
              textAlignVertical="top"
              maxLength={1000}
            />
            
            {selectedImage && (
              <View style={styles.imageContainer}>
                <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
                <TouchableOpacity style={styles.removeImageButton} onPress={handleRemoveImage}>
                  <Ionicons name="close-circle" size={24} color="#FF3B30" />
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton} onPress={handleSelectImage}>
              <Ionicons name="image-outline" size={20} color="#007AFF" />
              <Text style={styles.actionButtonText}>Add Photo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="camera-outline" size={20} color="#007AFF" />
              <Text style={styles.actionButtonText}>Camera</Text>
            </TouchableOpacity>
          </View>

          {/* Tags Section */}
          <View style={styles.tagsSection}>
            <Text style={styles.sectionTitle}>Add Tags</Text>
            
            {/* Add New Tag */}
            <View style={styles.addTagContainer}>
              <TextInput
                style={styles.tagInput}
                placeholder="Add a custom tag..."
                value={newTag}
                onChangeText={setNewTag}
                onSubmitEditing={handleAddTag}
              />
              <TouchableOpacity
                style={[styles.addTagButton, !newTag.trim() && styles.addTagButtonDisabled]}
                onPress={handleAddTag}
                disabled={!newTag.trim()}
              >
                <Ionicons name="add" size={20} color={newTag.trim() ? "#007AFF" : "#ccc"} />
              </TouchableOpacity>
            </View>

            {/* Selected Tags */}
            {tags.length > 0 && (
              <View style={styles.selectedTagsContainer}>
                <Text style={styles.selectedTagsTitle}>Selected Tags:</Text>
                <View style={styles.selectedTags}>
                  {tags.map((tag, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.selectedTag}
                      onPress={() => handleRemoveTag(tag)}
                    >
                      <Text style={styles.selectedTagText}>#{tag}</Text>
                      <Ionicons name="close" size={14} color="#666" />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* Common Tags */}
            <View style={styles.commonTagsContainer}>
              <Text style={styles.commonTagsTitle}>Popular Tags:</Text>
              <View style={styles.commonTags}>
                {commonTags.map((tag, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.commonTag, tags.includes(tag) && styles.commonTagSelected]}
                    onPress={() => {
                      if (tags.includes(tag)) {
                        handleRemoveTag(tag);
                      } else {
                        setTags([...tags, tag]);
                      }
                    }}
                  >
                    <Text style={[styles.commonTagText, tags.includes(tag) && styles.commonTagTextSelected]}>
                      #{tag}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Character Count */}
          <View style={styles.characterCount}>
            <Text style={styles.characterCountText}>
              {content.length}/1000 characters
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e5e9',
  },
  cancelButton: {
    fontSize: 16,
    color: '#666',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  postButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  postButtonDisabled: {
    backgroundColor: '#ccc',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  postButtonTextDisabled: {
    color: '#999',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
  },
  contentInput: {
    fontSize: 16,
    color: '#1a1a1a',
    minHeight: 120,
    textAlignVertical: 'top',
  },
  imageContainer: {
    position: 'relative',
    marginTop: 12,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  removeImageButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007AFF',
  },
  tagsSection: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  addTagContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tagInput: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 16,
  },
  addTagButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTagButtonDisabled: {
    backgroundColor: '#f0f0f0',
  },
  selectedTagsContainer: {
    marginBottom: 16,
  },
  selectedTagsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  selectedTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  selectedTagText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
    marginRight: 4,
  },
  commonTagsContainer: {
    marginBottom: 16,
  },
  commonTagsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  commonTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  commonTag: {
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  commonTagSelected: {
    backgroundColor: '#007AFF',
  },
  commonTagText: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },
  commonTagTextSelected: {
    color: '#fff',
  },
  characterCount: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  characterCountText: {
    fontSize: 14,
    color: '#666',
  },
});

export default CreatePostScreen; 