const nestedScroll = document.getElementById('homePara');
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
        const currentScroll = this.document.documentElement.scrollTop;
        let scrollDiff =0
         if (currentScroll>lastScrollTop) {
          scrollDiff= currentScroll-lastScrollTop;
          lastScrollTop=currentScroll;
         } else if (currentScroll<lastScrollTop) {
          lastScrollTop=currentScroll
         }
        nestedScroll.scrollTop+=scrollDiff*5
      });