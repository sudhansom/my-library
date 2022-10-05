import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { YoutubeVideoSrcComponent } from "./video.component";

@NgModule({
  declarations: [
    YoutubeVideoSrcComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[YoutubeVideoSrcComponent],
  providers: [],
  bootstrap: [],
})
export class YoutubeVideoSrcModule {}
