function toggleMenu() {
    const menu = document.getElementById('menuItems');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const isVisible = sidebar.style.left === "0px";
    sidebar.style.left = isVisible ? "-250px" : "0px";
  }
  
  <script>
    const sidebar = document.querySelector('.sidebar');
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');

    openBtn.addEventListener('click', () => {
        sidebar.style.left = '0';
    });

    closeBtn.addEventListener('click', () => {
        sidebar.style.left = '-250px';
    });
</script>
