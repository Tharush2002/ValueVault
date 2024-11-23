import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';
import { User } from '../../modals/User.model';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order-service/order.service';
import { OrderItemService } from '../../services/order-item-service/order-item.service';
import Swal from 'sweetalert2';
import { Order } from '../../modals/Order.model';
import { Datepicker, Modal } from 'flowbite';
import type { DatepickerOptions, DatepickerInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit, AfterViewInit {
  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private orderItemService: OrderItemService,
    private router: Router
  ) {}

  user: User | null = null;
  orders: Order[] | null = null;
  isUpdateNeeded: Boolean = false;
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';
  address: string = '';
  password: string = '';

  updatePassword() {
    this.isUpdateNeeded = true;
  }

  private getDate18YearsAgo(): string {
    const today = new Date();
    const eighteenYearsAgo = new Date(
      today.setFullYear(today.getFullYear() - 18)
    );
    const year = eighteenYearsAgo.getFullYear();
    const month = String(eighteenYearsAgo.getMonth() + 1).padStart(2, '0');
    const day = String(eighteenYearsAgo.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  }

  private getDate80YearsAgo(): string {
    const today = new Date();
    const eightyYearsAgo = new Date(
      today.setFullYear(today.getFullYear() - 80)
    );
    const year = eightyYearsAgo.getFullYear();
    const month = String(eightyYearsAgo.getMonth() + 1).padStart(2, '0');
    const day = String(eightyYearsAgo.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  }

  ngAfterViewInit(): void {
    const datepickerEl: HTMLInputElement = document.getElementById(
      'custom-datepicker'
    ) as HTMLInputElement;

    const minDate = this.getDate80YearsAgo();
    const maxDate = this.getDate18YearsAgo();

    const options: DatepickerOptions = {
      autohide: true,
      format: 'mm/dd/yyyy',
      minDate: minDate,
      maxDate: maxDate,
      orientation: 'top right',
      buttons: false,
    };

    const instanceOptions: InstanceOptions = {
      id: 'datepicker-custom-example',
      override: true,
    };

    if (datepickerEl) {
      const datepicker: DatepickerInterface = new Datepicker(
        datepickerEl,
        options,
        instanceOptions
      );
    }

    datepickerEl.addEventListener('changeDate', (event: any) => {
      const selectedDate = new Date(event.detail.date);
      this.dateOfBirth = selectedDate.toISOString().split('T')[0];
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      this.user = await this.userService.getUserById();
      this.orders = await this.orderService.getOrdersByUserId(this.user!.id!);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Server Error..',
        text: 'An error occurred while retrieving data. Please try again.',
        showConfirmButton: false,
        allowEscapeKey: false,
        timer: 3000,
      }).then(() => {
        this.router.navigate(['']);
      });
    }
    this.password = this.user?.password ? this.user.password : '';
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (form.checkValidity()) {
      this.firstName = (form.querySelector('#first_name') as HTMLInputElement).value;
      this.lastName = (
        form.querySelector('#last_name') as HTMLInputElement
      ).value;
      this.address = (form.querySelector('#address') as HTMLInputElement).value;
      this.password = (form.querySelector('#password') as HTMLInputElement).value;

      if (this.user) {
        this.user.firstName = this.firstName;
        this.user.lastName = this.lastName;
        this.user.dateOfBirth = this.dateOfBirth;
        this.user.address = this.address;
      }
      await this.userService.updateUser(this.user!);
      this.ngOnInit();
      const $modalElement = document.getElementById('accountInformationModal2');
      const modalInstance = new Modal($modalElement);
      modalInstance.hide();
    }
  }
}
