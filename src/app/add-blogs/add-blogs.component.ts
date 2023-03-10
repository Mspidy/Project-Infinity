import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LotsdataService } from '../lotsdata.service';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent {

  newBlog:boolean=false;
  mainBlog:boolean=true;
  documentObj:any="";
  AllBlogs:any=[];

  newBlogs!:FormGroup;

  constructor(public apiService: LotsdataService){}

  ngOnInit(){
    this.newBlogs = new FormGroup({
      imageBlogs : new FormControl('', Validators.required),
      selectBlog: new FormControl('', Validators.required),
      blogtitle: new FormControl('', Validators.required),
      blogdescription: new FormControl('', Validators.required),
    })
    this.retriveBlogs();

  }

  createBlog(){
    this.newBlog = true;
    this.mainBlog = false;
  }

  mainPage(){
    this.newBlog = false;
    this.mainBlog = true;
  }

  saveblogs(){
    console.log(this.newBlogs.value);
    let obj = {
      selectblog: this.newBlogs.value.selectBlog,
      blogtitle: this.newBlogs.value.blogtitle,
      blogdescription: this.newBlogs.value.blogdescription,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.apiService.newBlogs(obj).subscribe((res:any)=>{
      console.log(res);
    })
    this.newBlogs.reset();
  }

  retriveBlogs(){
    this.apiService.getBlogs().subscribe((res:any)=>{
      console.log("Get All Blogs",res);
      for(let i =0; i<res.length;i++){
        this.AllBlogs[i]=res[i]
      }
      console.log(this.AllBlogs);
    });
  }


}
