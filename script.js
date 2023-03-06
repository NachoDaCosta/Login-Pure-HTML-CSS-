const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btn=document.querySelector('.btn-login-popup');
const close_btn=document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active'); /*ACA LE DIGO QUE CON EL CLICK LE PONGA LA CLASE */

});


loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active'); /*ACA LE DIGO QUE CON EL CLICK LE PONGA LA CLASE */
    
});


btn.addEventListener('click',()=>{
    wrapper.classList.add('active-popup'); /*ACA LE DIGO QUE CON EL CLICK LE PONGA LA CLASE */
    
});

close_btn.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup'); /*ACA LE DIGO QUE CON EL CLICK LE PONGA LA CLASE */
    
});


