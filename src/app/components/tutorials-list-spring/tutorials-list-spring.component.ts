import { Component, OnInit } from '@angular/core';
import { Tutorialspring } from 'src/app/models/tutorialspring.model';
import { TutorialSpringService } from 'src/app/services/tutorial-spring.service';

@Component({
  selector: 'app-tutorials-list-spring',
  templateUrl: './tutorials-list-spring.component.html',
  styleUrls: ['./tutorials-list-spring.component.css']
})
export class TutorialsListSpringComponent implements OnInit {

  tutorialsspring?: Tutorialspring[];
  currentTutorialSpring: Tutorialspring = {};
  currentIndex = -1;
  title = '';

  constructor(private tutorialSpringService: TutorialSpringService) { }

  ngOnInit(): void {
    this.retrieveTutorialsspring();
  }

  retrieveTutorialsspring(): void {
    this.tutorialSpringService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorialsspring = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshSpringList(): void {
    this.retrieveTutorialsspring();
    this.currentTutorialSpring = {};
    this.currentIndex = -1;
  }

  setActiveTutorialSpring(tutorial: Tutorialspring, index: number): void {
    this.currentTutorialSpring = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorialsSpring(): void {
    this.tutorialSpringService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshSpringList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitleSpring(): void {
    this.currentTutorialSpring = {};
    this.currentIndex = -1;

    this.tutorialSpringService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorialsspring = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}