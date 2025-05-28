// Carrossel de fotos
        let currentIndex = 0;
        const images = document.querySelectorAll('#photo-carousel img');
        const totalImages = images.length;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % totalImages;
            images[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 4000); // Muda a imagem a cada 3 segundos

        // Contador de tempo desde uma data específica
        const startDate = new Date('2024-05-09'); // Substitua pela sua data
        function updateCountdown() {
            const now = new Date();
            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();

            if (days < 0) {
                months--;
                days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Ajusta o número de dias do mês anterior
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            document.getElementById('countdown').innerText =
                `${years} ano, ${months} meses, ${days} dias`;
        }

        setInterval(updateCountdown, 1000); // Atualiza o contador a cada segundo
        updateCountdown(); // Chama a função uma vez ao iniciar

         