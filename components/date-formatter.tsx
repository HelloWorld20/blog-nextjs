import dayjs from 'dayjs'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  return <time dateTime={dateString}>{dayjs(dateString).format('MMM	DD, YYYY ')}</time>
}

export default DateFormatter
