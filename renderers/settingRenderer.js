const btn = document.getElementById('btn')

btn.addEventListener('click', async () => {
  window.electronAPI.homePage();
  window.close()
})