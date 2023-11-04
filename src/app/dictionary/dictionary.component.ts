import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
})
export class DictionaryComponent {
  constructor(private router: Router) {}

  dictionaryEntries = [
    { word: 'অন্ধকার', meaning: 'dark' },
    { word: 'অপারেশন', meaning: 'operation' },
    { word: 'অবাধ্য', meaning: 'disobedient' },
    { word: 'অলস', meaning: 'lazy' },
    { word: 'অশিক্ষিত', meaning: 'illiterate' },
    { word: 'অসুবিধা', meaning: 'unfavour' },
    // Add more entries as needed
  ];

  selectedWord: string = '';
  showCardFlag: boolean = false;

  showCard() {
    this.showCardFlag = true;
  }

  hideCard() {
    this.showCardFlag = false;
  }

  getMeaning(word: string): string {
    // Use the predefined data to construct the image path from the "resources" folder
    const entry = this.dictionaryEntries.find((entry) => entry.word === word);
    return entry ? `../../resources/${entry.meaning}.jpg` : '';
  }
  

  showMeaning(word: string) {
    this.router.navigate(['/word-detail', word]);
  }
}
