"use client";
import classNames from "classnames";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useFeatureStore } from "./store";

type Props = { children: React.ReactNode; id: string };

const FeatureTitle = ({ children, id }: Props) => {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      ref={ref}
      className={classNames(
        "feature-title py-16 font-bold mx-8 text-5xl transition-colors",
        isInView ? "text-black" : "text-black text-opacity-30"
      )}
    >
      {children}
    </p>
  );
};

export default FeatureTitle;
