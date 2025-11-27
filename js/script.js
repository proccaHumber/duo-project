const app = {};

app.currDate = new Date();
app.currYear = app.currDate.getFullYear();

app.postFooter = () => {
  app.footerText = document.querySelector(".footerCopy")
  app.footerText.textContent = `Copyright © ${app.currYear} MyRealCompany Inc LLC United`
}

app.init = () => {
  app.postFooter()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', app.init)
} else {
  app.init()
};