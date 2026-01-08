import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-star-rating-component',
  imports: [],
  templateUrl: './star-rating-component.html',
  styleUrl: './star-rating-component.scss',
})
export class StarRatingComponent {
  numberOfStars = input<number>(5);
  starsArray = computed(() => Array(this.numberOfStars()).fill(0));
  rating = signal(0);
  hoverRating = signal(0);

  setRating(val:number){
    this.rating.set(val);
  }
  onMouseEnter(val: number){
    this.hoverRating.set(val);
  }
  onMouseLeave(){
    this.hoverRating.set(0);
  }
}
