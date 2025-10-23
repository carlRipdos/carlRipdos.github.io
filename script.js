// Sample photos data - Customize this array with your own photos
const photos = [
    {
        id: 1,
        title: "Lady in RED",
        description: "Ang akong gina balik balik tan.aw sa fb..I miss my college crush Pats, and first taym maka comment :P",
        thumbnail: "pic/2014.jpg", // Replace with your image URL
        full: "pic/2014.jpg" // Replace with full-size URL
    },
    {
        id: 2,
        title: "My first Babs gift",
        description: "Mao bani akong gift? hahahaa... pero i remember naka gift kog pig haha asa na kaha ni ron mmhhh...",
        thumbnail: "pic/2015-2.jpg",
        full: "pic/2015-2.jpg"
    },
    {
        id: 3,
        title: "Weekend Escape",
        description: "Always looking forward sa weekend kay maka laag sa akong idol Hayley :D. Tamang tambay lang sa Naga :D",
        thumbnail: "pic/2015.jpg",
        full: "pic/2015.jpg"
    },
    {
        id: 4,
        title: "Hi Cutie",
        description: "The time mag meet sa 5th floor or 7th hahaha :P.. My Vain Pats nga nag entroduce sa world of Pictures haha",
        thumbnail: "pic/2015-1.jpg",
        full: "pic/2015-1.jpg"
    },
    {
        id: 5,
        title: "1 2 3 Smile",
        description: "Our on the go place that helps us start our relation stroger babe <3 , ps. imong bai recmar sauna hahaha",
        thumbnail: "pic/2016.jpg",
        full: "pic/2016.jpg"
    },
    {
        id: 6,
        title: "Weekend Stroll",
        description: "Ang barato pero fun and exiting place :D, tamang muni2x lang bahalag uwan haha",
        thumbnail: "pic/2016-1.jpg",
        full: "pic/2016-1.jpg"
    },
    {
        id: 7,
        title: "Garden Hopping",
        description: "Starting to explore new places nga estitik hahaha with Samsung Phone pa haha",
        thumbnail: "pic/2017.jpg",
        full: "pic/2017.jpg"
    },
    {
        id: 8,
        title: "Sirao",
        description: "The place we saw how it bloom, same as we make our love bloom",
        thumbnail: "pic/2018.jpg",
        full: "pic/2018.jpg"
    },
    {
        id: 9,
        title: "New Ride",
        description: "Sumakses sa pag pangutang hahaha.. we got our new motmot babe our new member sa laag :D",
        thumbnail: "pic/2019.jpg",
        full: "pic/2019.jpg"
    },
    {
        id: 10,
        title: "Quarantine Escape",
        description: "Food, pool, wind, place, and my baby.. a perfek way to relax our weekend :*..",
        thumbnail: "pic/2020-1.jpg",
        full: "pic/2020-1.jpg"
    },
    {
        id: 11,
        title: "Promise Ring",
        description: "Sa kasilak sa adlaw, ikaw ra gihapon ang higugmaon adlaw adlaw.. kudos to my baby accepting my promise that soon te be made",
        thumbnail: "pic/2020.jpg",
        full: "pic/2020.jpg"
    },
    {
        id: 12,
        title: "Island Escapade",
        description: "Exploring island by island nata haha, bahalag pobre basta hilas gihapon hahaha",
        thumbnail: "pic/2021.jpg",
        full: "pic/2021.jpg"
    },
    {
        id: 13,
        title: "Parting Ride",
        description: "Enjoying every last minute before entering LDR.. sad but kakayanin for the future",
        thumbnail: "pic/2022-1.jpg",
        full: "pic/2022-1.jpg"
    },
    {
        id: 14,
        title: "Growing older",
        description: "From Jollibee to resto.. Medyo kaya na magpa sosyal gamay haha, salamat sa CC ani hahaha..",
        thumbnail: "pic/2022-2.jpg",
        full: "pic/2022-2.jpg"
    },
    {
        id: 15,
        title: "LDR",
        description: "We are now entering LDR, Happy for my Baby's achievement <3",
        thumbnail: "pic/2022.jpg",
        full: "pic/2022.jpg"
    },
    {
        id: 16,
        title: "Recharging",
        description: "As LDR is hard, a little break would be nice :*.. Just chillen with my baby Boss <3",
        thumbnail: "pic/2023.jpg",
        full: "pic/2023.jpg"
    },
    {
        id: 17,
        title: "Budgetarian ERA",
        description: "We are still growing bahalag nagkautang2x :D.. small sacrifice for the big future.",
        thumbnail: "pic/2024.jpg",
        full: "pic/2024.jpg"
    },
    {
        id: 18,
        title: "Time Fly",
        description: "Celebrating my baby's 18th birthday aw hahaha.. pwede ma pause sa ang time hahaha",
        thumbnail: "pic/2025.jpg",
        full: "pic/2025.jpg"
    },
    {
        id: 19,
        title: "To Infinity and Beyond",
        description: "We still got along way babe. but layo nasad ta.. I always love you bisag layo ta. Just always remember that I will wait for you :*",
        thumbnail: "pic/pic3.jpg",
        full: "pic/pic3.jpg"
    },
    {
        id: 20,
        title: "Pats and Babs",
        description: "Naghihintay sa tamang panahon <3, para makapaldo na hahahaha",
        thumbnail: "pic/2026.jpg",
        full: "pic/2026.jpg"
    }
    
];

let currentPhotoId = null;
let zoomLevel = 1;

// Generate gallery thumbnails
function generateGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = photos.map(photo => `
        <div class="thumbnail" data-id="${photo.id}">
            <img src="${photo.thumbnail}" alt="${photo.title}">
            <div class="thumbnail-overlay">
                <h3>${photo.title}</h3>
            </div>
        </div>
    `).join('');

    // Add click listeners to thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            openModal(id);
        });
    });
}

// Open modal for selected photo
function openModal(id) {
    const photo = photos.find(p => p.id === id);
    if (!photo) return;

    currentPhotoId = id;
    document.getElementById('modalImage').src = photo.full;
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDesc').textContent = photo.description;

    // Load like count
    const likes = localStorage.getItem(`likes_${id}`) || 0;
    const likeBtn = document.getElementById('likeBtn');
    likeBtn.textContent = `❤️ Like (${likes})`;
    likeBtn.dataset.liked = likes > 0 ? 'true' : 'false';

    // Reset zoom
    zoomLevel = 1;
    document.getElementById('modalImage').style.transform = 'scale(1)';

    document.getElementById('photoModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal
function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Like button functionality
document.getElementById('likeBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    const likes = parseInt(localStorage.getItem(`likes_${currentPhotoId}`) || 0);
    const newLikes = likes + 1;
    localStorage.setItem(`likes_${currentPhotoId}`, newLikes);
    e.target.textContent = `❤️ Like (${newLikes})`;
    e.target.dataset.liked = 'true';
});

// Zoom functionality
document.getElementById('zoomIn').addEventListener('click', () => {
    zoomLevel = Math.min(zoomLevel + 0.5, 3);
    updateZoom();
});

document.getElementById('zoomOut').addEventListener('click', () => {
    zoomLevel = Math.max(zoomLevel - 0.5, 0.5);
    updateZoom();
});

function updateZoom() {
    const img = document.getElementById('modalImage');
    img.style.transform = `scale(${zoomLevel})`;
}

// Mouse wheel zoom
document.getElementById('modalImage').addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
        zoomLevel = Math.min(zoomLevel + 0.1, 3);
    } else {
        zoomLevel = Math.max(zoomLevel - 0.1, 0.5);
    }
    updateZoom();
});

// Event listeners
document.querySelector('.close').addEventListener('click', closeModal);
document.getElementById('photoModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('photoModal')) {
        closeModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize
generateGallery();

window.addEventListener('load', function() {
    // Get the preloader element by its ID
    const preloader = document.getElementById('preloader');

    // Add the 'hidden' class to fade out the preloader
    preloader.classList.add('hidden');
  });