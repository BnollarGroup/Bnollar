import style from "./Tags.module.css";

export default function GroupTags({
  data,
}: {
  data: { tags: { title: string; count: number }[] };
}) {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Tags</h1>

      {data.tags.map((tag, i) => (
        <div className={style.list} key={i}>
          <h1>{tag.title}</h1>
          <h3>{tag.count} Post</h3>
        </div>
      ))}
    </div>
  );
}
