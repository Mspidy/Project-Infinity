import { Component } from '@angular/core';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent {

  newBlog:boolean=false;
  mainBlog:boolean=true;
  documentObj:any="";

  createBlog(){
    this.newBlog = true;
    this.mainBlog = false;
  }

  mainPage(){
    this.newBlog = false;
    this.mainBlog = true;
  }
}
