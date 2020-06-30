'use strict';

const menu = document.querySelector('#mobile_menu');
const nav = document.querySelector('#nav_mobile');

menu.addEventListener('click', function () {
	nav.classList.toggle('active');
	this.classList.toggle('isActive');
});

/* Modal 
======*/
const modal = document.querySelector('#modal_email');
const openM = document.querySelector('.main_btn');
const closeM = document.querySelector('.close_btn');

openM.addEventListener('click', () => {
	modal.classList.add('active');
});

closeM.addEventListener('click', () => {
	modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
	if (e.target.className === 'modal active') {
		modal.classList.remove('active');
		form.reset();
	}
});

/* Form Auth
========== */

const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirm = document.querySelector('#password_confirm');

/* Cheked Spaces */
function checkInput(arr) {
	arr.forEach((el) => {
		if (el.value.trim() === '') {
			showError(el, `${getFieldName(el)} is required`);
		} else {
			showValid(el);
		}
	});
}

function getFieldName(el) {
	return el.getAttribute('name').charAt(0).toUpperCase() + el.getAttribute('name').slice(1);
}

function checkedLength(input, min, max) {
	const inputLength = input.value.length;

	if (inputLength < min) {
		showError(input, `${getFieldName(input)} is smaller ${min}`);
		input;
	} else if (inputLength > max) {
		showError(input, `${getFieldName(input)} is biggest ${max}`);
	} else {
		showValid(input);
	}
}

function checkedSamePassword(pass, conf) {
	if (pass.value !== conf.value) {
		showError(conf, 'Password do not match');
	}
}

function showError(input, message) {
	const parentInput = input.parentElement;
	parentInput.classList.add('error');
	parentInput.classList.remove('valid');

	const showMessage = parentInput.querySelector('.form_error');
	showMessage.innerHTML = message;
	showMessage.classList.add('form_error');
}

function showValid(input) {
	const parentInput = input.parentElement;
	parentInput.classList.add('valid');

	parentInput.classList.remove('error');
}

form.addEventListener('submit', function (e) {
	e.preventDefault();

	checkInput([name, email, password, confirm]);
	checkedLength(name, 3, 30);
	checkedLength(password, 8, 25);
	checkedLength(confirm, 8, 25);
	checkedSamePassword(password, confirm);
});
