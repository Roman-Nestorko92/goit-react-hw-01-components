import css from "./css/statistic.module.css"

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function Statistic({ title, stats }) {
  return (
    <section className={css.statistic}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage} %</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Statistic
