const FeatureList = ({ items }) => (
  <div className="grid gap-4">
    {items.map((item) => (
      <div key={item} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
        <p className="text-sm leading-7 text-cocoa-200">{item}</p>
      </div>
    ))}
  </div>
);

export default FeatureList;
