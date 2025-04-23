// Store original content
    const originalContent = {
      home: {
        intro: "Kintampo is a vibrant community rich in culture, history, and natural beauty. Explore our tourist sites, stay updated on events, and learn more about our heritage.",
        road: "Kintampo is well-connected by road, with major highways like the N10 and N11 passing through the town. These roads facilitate the movement of goods and people, linking Kintampo to cities like Kumasi, Tamale, and Accra. However, some rural roads still require upgrades to improve accessibility for surrounding communities.",
        college: "The Kintampo College of Health and Well-Being (formerly known as the Kintampo Rural Health Training School) is one of Ghana's premier institutions dedicated to training healthcare professionals. Located in the heart of Kintampo, in the Bono East Region, the college plays a critical role in addressing Ghana's healthcare needs by producing skilled and compassionate health workers.",
        hospital: "The town is home to the Kintampo Municipal Hospital, which serves as a key healthcare provider for the region. Additionally, there are several clinics and community health centers that cater to the needs of residents and nearby rural areas."
      },
      tourist: {
        title1: "Kintampo Waterfalls",
        desc1: "A breathtaking natural wonder perfect for hiking and picnics.",
        title2: "Kintampo Museum",
        desc2: "Learn about the rich history and culture of the Kintampo people."
      },
      events: [
        "Cultural Festival - October 15, 2025",
        "Community Clean-Up - November 5, 2025",
        "Farmers Market - Every Saturday"
      ],
      blog: {
        title: "Exploring Kintampo's History",
        date: "March 23, 2025",
        subtitle: "Discover the fascinating history of Kintampo through our latest blog post.",
        para1: "While the Kintampo Waterfalls often steal the spotlight, Fuller Falls is another hidden gem worth exploring. Located a few kilometers from the main town, this lesser-known waterfall offers a more secluded and tranquil experience. The journey to Fuller Falls is an adventure in itself, as you trek through scenic trails and immerse yourself in the natural beauty of the region.",
        para2: "Kintampo is not just about natural wonders; it's also a place where you can connect with Ghana's rich cultural heritage. The town is home to the Kintampo people, who are known for their warm hospitality and vibrant traditions. Take the time to visit local communities, where you can learn about traditional crafts, music, and dance. If you're lucky, you might even witness a cultural festival or ceremony, which are often filled with colorful costumes, drumming, and storytelling.",
        para3: "Kintampo holds a special place in Ghana's history. It is believed to be the geographical center of Ghana, earning it the nickname \"The Center of Ghana.\" This strategic location has made Kintampo a hub for trade and commerce over the years. The town also played a role in the trans-Saharan trade routes, connecting West Africa to North Africa and beyond.\nFor history enthusiasts, a visit to the Kintampo Museum is a must. The museum offers insights into the town's past, including its role in Ghana's pre-colonial and colonial history. You'll find artifacts, photographs, and exhibits that tell the story of Kintampo's evolution over the centuries."
      }
    };
    let likeCount = 0;
    let dislikeCount = 0;
    let isAdmin = false;
    let adminPassword = "kintampo123";

    // Theme management
    function changeTheme() {
      document.body.classList.toggle('dark-mode');
      const themeButton = document.getElementById('themeButton');
      if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Light Mode';
      } else {
        themeButton.textContent = 'Dark Mode';
      }
    }

    // Blog interactions
    function likePost() {
      likeCount++;
      document.getElementById('like-count').textContent = likeCount;
    }
    function dislikePost() {
      dislikeCount++;
      document.getElementById('dislike-count').textContent = dislikeCount;
    }
    function addComment() {
      const commentInput = document.getElementById('comment-input');
      const commentList = document.getElementById('comment-list');
      if (commentInput.value.trim() !== '') {
        const newComment = document.createElement('li');
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = '';
      }
    }

    // Form submission
    document.getElementById('book-order-form').addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you for your order! We will contact you shortly.');
      this.reset();
    });

    // Admin functionality
    function toggleAdminPanel() {
      if (!isAdmin) {
        const password = prompt('Enter admin password:');
        if (password === adminPassword) {
          isAdmin = true;
          document.getElementById('admin-panel').style.display = 'block';
          document.getElementById('admin-toggle').textContent = 'Logout';
          // Load current content into edit fields
          loadContentForEditing();
        } else {
          alert('Incorrect password');
        }
      } else {
        isAdmin = false;
        document.getElementById('admin-panel').style.display = 'none';
        document.getElementById('admin-toggle').textContent = 'Admin Login';
      }
    }

    function loadContentForEditing() {
      // Home section
      document.getElementById('home-edit').value = 
        `${originalContent.home.intro}\n---\n${originalContent.home.road}\n---\n${originalContent.home.college}\n---\n${originalContent.home.hospital}`;
      // Tourist section
      document.getElementById('tourist-edit').value = 
        `${originalContent.tourist.title1}\n${originalContent.tourist.desc1}\n---\n${originalContent.tourist.title2}\n${originalContent.tourist.desc2}`;
      // Events section
      document.getElementById('events-edit').value = originalContent.events.join('\n');
      // Blog section
      document.getElementById('blog-edit').value = 
        `${originalContent.blog.title}\n---\n${originalContent.blog.date}\n---\n${originalContent.blog.subtitle}\n---\n${originalContent.blog.para1}\n---\n${originalContent.blog.para2}\n---\n${originalContent.blog.para3}`;
    }

    function saveAllChanges() {
      if (!isAdmin) return;
      // Get the edited content
      const homeContent = document.getElementById('home-edit').value.split('\n---\n');
      const touristContent = document.getElementById('tourist-edit').value.split('\n---\n');
      const eventsContent = document.getElementById('events-edit').value.split('\n');
      const blogContent = document.getElementById('blog-edit').value.split('\n---\n');
      // Update home section temporarily
      if (homeContent.length >= 4) {
        document.getElementById('home-intro').textContent = homeContent[0];
        document.getElementById('home-road').textContent = homeContent[1];
        document.getElementById('home-college').textContent = homeContent[2];
        document.getElementById('home-hospital').textContent = homeContent[3];
      }
      // Update tourist section temporarily
      if (touristContent.length >= 2) {
        const touristParts1 = touristContent[0].split('\n');
        const touristParts2 = touristContent[1].split('\n');
        if (touristParts1.length >= 2) {
          document.getElementById('tourist-title-1').textContent = touristParts1[0];
          document.getElementById('tourist-desc-1').textContent = touristParts1[1];
        }
        if (touristParts2.length >= 2) {
          document.getElementById('tourist-title-2').textContent = touristParts2[0];
          document.getElementById('tourist-desc-2').textContent = touristParts2[1];
        }
      }
      // Update events section temporarily
      if (eventsContent.length >= 3) {
        document.getElementById('event-1').textContent = eventsContent[0];
        document.getElementById('event-2').textContent = eventsContent[1];
        document.getElementById('event-3').textContent = eventsContent[2];
      }
      // Update blog section temporarily
      if (blogContent.length >= 6) {
        document.getElementById('blog-title').textContent = blogContent[0];
        document.getElementById('blog-date').textContent = blogContent[1];
        document.getElementById('blog-subtitle').textContent = blogContent[2];
        document.getElementById('blog-para-1').textContent = blogContent[3];
        document.getElementById('blog-para-2').textContent = blogContent[4];
        document.getElementById('blog-para-3').textContent = blogContent[5];
      }
      alert('All changes saved temporarily! They will reset when the page is refreshed.');
    }

    function resetAllChanges() {
      if (!isAdmin) return;
      // Reset to original content
      document.getElementById('home-intro').textContent = originalContent.home.intro;
      document.getElementById('home-road').textContent = originalContent.home.road;
      document.getElementById('home-college').textContent = originalContent.home.college;
      document.getElementById('home-hospital').textContent = originalContent.home.hospital;
      document.getElementById('tourist-title-1').textContent = originalContent.tourist.title1;
      document.getElementById('tourist-desc-1').textContent = originalContent.tourist.desc1;
      document.getElementById('tourist-title-2').textContent = originalContent.tourist.title2;
      document.getElementById('tourist-desc-2').textContent = originalContent.tourist.desc2;
      document.getElementById('event-1').textContent = originalContent.events[0];
      document.getElementById('event-2').textContent = originalContent.events[1];
      document.getElementById('event-3').textContent = originalContent.events[2];
      document.getElementById('blog-title').textContent = originalContent.blog.title;
      document.getElementById('blog-date').textContent = originalContent.blog.date;
      document.getElementById('blog-subtitle').textContent = originalContent.blog.subtitle;
      document.getElementById('blog-para-1').textContent = originalContent.blog.para1;
      document.getElementById('blog-para-2').textContent = originalContent.blog.para2;
      document.getElementById('blog-para-3').textContent = originalContent.blog.para3;
      // Reload the edit fields
      loadContentForEditing();
      alert('All changes reset to original content!');
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
      // Any initialization code can go here
    });
