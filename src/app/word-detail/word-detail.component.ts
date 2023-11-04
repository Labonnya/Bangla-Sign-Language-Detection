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

  getImagePath() : string{
    // return `../../assets/${this.getMeaning(this.selectedWord)}.png`;
    if(this.selectedWord === 'অন্ধকার'){
      return `../../assets/dark.png`;
    }
    else if(this.selectedWord === 'অপারেশন'){
      return `../../assets/operation.png`;
    }
    return ``;
  }

  // Implement the logic to fetch the image URL based on the selected word
  getMeaning(word: string): string {
    // You can fetch the image URL from a resource or database here.
    // For simplicity, you can use a predefined mapping of word to image URL.
    const imageMapping: Record<string, string> = {
      'অন্ধকার': '../../assets/dark.png',
      'অপারেশন': '../../assets/operation.png',
      // Add more entries as needed
    };
    return imageMapping[word] || ''; // Return the image URL if found, or an empty string
  }
}