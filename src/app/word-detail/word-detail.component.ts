import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css'],
})
export class WordDetailComponent implements OnInit {
  selectedWord: string;

  constructor(private route: ActivatedRoute) {
    this.selectedWord = ''; // Initialize 'selectedWord' here if needed
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedWord = params['word'];
    });
  }

  // Implement the logic to fetch the image URL based on the selected word
  getMeaning(word: string): string {
    // You can fetch the image URL from a resource or database here.
    // For simplicity, you can use a predefined mapping of word to image URL.
    const imageMapping: Record<string, string> = {
      'অন্ধকার': 'dark.jpg',
      'অপারেশন': 'operation.jpg',
      // Add more entries as needed
    };
    return imageMapping[word] || ''; // Return the image URL if found, or an empty string
  }
}
