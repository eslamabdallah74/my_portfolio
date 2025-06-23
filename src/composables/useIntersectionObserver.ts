import { ref, onMounted, onUnmounted, type Ref } from 'vue';

export function useIntersectionObserver(
  target: Ref<Element | null>,
  options: IntersectionObserverInit = {}
) {
  const isIntersecting = ref(false);
  let observer: IntersectionObserver | undefined;

  const stop = () => {
    if (observer) {
      observer.disconnect();
      observer = undefined;
    }
  };

  onMounted(() => {
    if (target.value) {
      observer = new IntersectionObserver(([entry]) => {
        isIntersecting.value = entry.isIntersecting;
      }, {
        threshold: 0.1,
        ...options
      });

      observer.observe(target.value);
    }
  });

  onUnmounted(stop);

  return {
    isIntersecting,
    stop
  };
}