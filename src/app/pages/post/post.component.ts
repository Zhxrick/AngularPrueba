import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast'; 
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, ConfirmDialogModule, ToastModule, FormsModule, DialogModule], 
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ConfirmationService, MessageService] 
})

export class PostComponent implements OnInit {
  posts: Post[] = []; 
  selectedPost: Post = new Post()
  displayEditDialog = false; 
  displayDialog: boolean = false; 
  visible = false; 

  constructor(
    private postService: PostService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService 
  ) {} 

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getListadoPost()
      .pipe(catchError(error => {
        console.error('Error al obtener los posts:', error);
        return of([]); 
      }))
      .subscribe((data: Post[]) => this.posts = data);
  }

  verDetalles(post: Post) {
    this.selectedPost = { ...post }; 
    this.displayDialog = true; 
  }
  

  confirmDelete(event: Event, postId: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Seguro que quieres eliminar este post?',
      header: 'Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Eliminar',
      rejectLabel: 'Cancelar',
      acceptButtonProps: { severity: 'danger' },
      rejectButtonProps: { severity: 'secondary', outlined: true },
      accept: () => this.deletePost(postId)
    });
  }

  deletePost(postId: number) {
    this.postService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter(post => post.postId !== postId);
      this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Post eliminado correctamente' });
    });
  }


  showDialog(post: Post) {
    this.selectedPost = { ...post }; 
    this.visible = true; 
  }

  updatePost() {
    if (!this.selectedPost) return;
    this.postService.updatePost(this.selectedPost).subscribe({
      next: () => {
        this.visible = false; 
        this.loadPosts(); 
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Post actualizado' });
      },
      error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar' })
    });
  }

}





  