import { Component, Input, OnInit } from '@angular/core';
import { TutorialSpringService } from 'src/app/services/tutorial-spring.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorialspring } from 'src/app/models/tutorialspring.model';

@Component({
  selector: 'app-tutorial-details-spring',
  templateUrl: './tutorial-details-spring.component.html',
  styleUrls: ['./tutorial-details-spring.component.css']
})
export class TutorialDetailsSpringComponent implements OnInit{

  @Input() viewMode = false;

  @Input() currentSpringTutorial: Tutorialspring = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private tutorialSpringService: TutorialSpringService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorialSpring(this.route.snapshot.params["id"]);
    }
  }

  getTutorialSpring(id: string): void {
    this.tutorialSpringService.get(id)
      .subscribe({
        next: (data) => {
          this.currentSpringTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublishedSpring(status: boolean): void {
    const data = {
      title: this.currentSpringTutorial.title,
      description: this.currentSpringTutorial.description,
      published: status
    };

    this.message = '';

    this.tutorialSpringService.update(this.currentSpringTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentSpringTutorial.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorialSpring(): void {
    this.message = '';

    this.tutorialSpringService.update(this.currentSpringTutorial.id, this.currentSpringTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorialSpring(): void {
    this.tutorialSpringService.delete(this.currentSpringTutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorialsspring']);
        },
        error: (e) => console.error(e)
      });
  }

}
