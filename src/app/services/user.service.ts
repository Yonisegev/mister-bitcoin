import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Move } from '../model/move.model';
import { StorageService } from './storage.service';
import { ContactService } from '../services/contact.service';
const USERS_KEY = 'userDB';
const LOGGEDUSER_KEY = 'loggedUser';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private storageService: StorageService) {}

  users: User[];

  public getUserByName(name: string): User {
    this.users = this.storageService.loadFromStorage(USERS_KEY);
    if (!this.users || !this.users.length) {
      this.users = [];

      return this.createUser(name);
    } else {
      const newUser = this.users.find((user) => user.name === name);
      if (newUser) {
        this.storageService.saveToStorage(LOGGEDUSER_KEY, newUser._id);
        return newUser;
      } else {
        return this.createUser(name);
      }
    }
  }

  public getLoggedUser() {
    const userId = this.storageService.loadFromStorage(LOGGEDUSER_KEY);
    const user = this.users?.find((user) => user._id === userId);
    return user;
  }

  public logout() {
    localStorage.removeItem(LOGGEDUSER_KEY);
  }

  public transferFunds(contact, amount) {
    this.users = this.storageService.loadFromStorage(USERS_KEY);
    const fromUser = this.getLoggedUser();
    if (!fromUser) return;
    if (+fromUser.coins < +amount || !amount) {
      return 'Insufficent funds';
    }
    const moveToAdd = new Move(contact._id, contact.name, Date.now(), amount);
    fromUser.moves = [moveToAdd, ...fromUser.moves];
    fromUser.coins = fromUser.coins - amount;

    const userIdx = this.users.findIndex((user) => user._id === fromUser._id);
    const updatedUsers = [...this.users];
    updatedUsers[userIdx] = fromUser;
    this.users = updatedUsers;
    this.storageService.saveToStorage(USERS_KEY, updatedUsers);
    return `Transferred ${amount} BTC to ${contact.name} successfully`;
  }

  public getContactMoves(contactId) {
    const loggedUser = this.getLoggedUser();
    if (!loggedUser) return;
    const contactMoves = loggedUser.moves.filter(
      (move) => move.toId === contactId
    );
    return contactMoves;
  }

  public getLastThreeMoves() {
    const loggedUser = this.getLoggedUser();
    if (!loggedUser) return;
    const lastMoves = loggedUser.moves.slice(0, 3);
    return lastMoves;
  }

  private createUser(name) {
    const newUser = new User(name, 100, []);
    newUser.setId();
    const usersToAdd = [...this.users, newUser];
    this.users = usersToAdd;
    this.storageService.saveToStorage(USERS_KEY, this.users);
    this.storageService.saveToStorage(LOGGEDUSER_KEY, newUser._id);
    return newUser;
  }
}
