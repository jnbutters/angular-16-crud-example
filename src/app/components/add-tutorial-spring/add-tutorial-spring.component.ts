import { Component, OnInit } from '@angular/core';
import { Tutorialspring } from 'src/app/models/tutorialspring.model';
import { TutorialSpringService } from 'src/app/services/tutorial-spring.service';

@Component({
  selector: 'app-add-tutorial-spring',
  templateUrl: './add-tutorial-spring.component.html',
  styleUrls: ['./add-tutorial-spring.component.css']
})
export class AddTutorialSpringComponent implements OnInit {

  tutorialspring: Tutorialspring = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialspringService: TutorialSpringService) { }

  ngOnInit(): void {
  }

  saveTutorialSpring(): void {
    const data = {
      title: this.tutorialspring.title,
      description: this.tutorialspring.description
    };

    this.tutorialspringService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorialSpring(): void {
    this.submitted = false;
    this.tutorialspring = {
      title: '',
      description: '',
      published: false
    };
  }

}