// src/app/dictionary/dictionary.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
})
export class DictionaryComponent {
  dictionaryEntries = [
    { word: 'অন্ধকার', meaning: 'Dark' },
    { word: 'অপারেশন', meaning: 'Operation' },
    { word: 'অবাধ্য', meaning: 'Disobidient' },
    { word: 'অভিনয়', meaning: 'Acting' },
    { word: 'অভিধান', meaning: 'Dictionary' },
    { word: 'অলস', meaning: 'Lazy' },
    { word: 'অশিক্ষিত', meaning: 'Illiterate' },
    { word: 'অসুবিধা', meaning: 'Unfavourable' },
    // { word: 'আইন', meaning: 'Law' },
    

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
    // You can implement logic to fetch the meaning based on the selected word here.
    // For simplicity, we use the predefined data in dictionaryEntries.
    const entry = this.dictionaryEntries.find((entry) => entry.word === word);
    return entry ? entry.meaning : '';
  }
  showMeaning(word: string) {
    this.selectedWord = word;
  }
}
