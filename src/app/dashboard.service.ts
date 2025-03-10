import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:3000/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getTotalUsers(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/totalUsers`);
  }

  getTotalCategories(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/totalCategories`);
  }

  getRecentActivities(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/recentActivities`);
  }
}