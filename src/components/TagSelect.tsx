import { Select, Tag } from 'antd'

interface Option {
  tag: string
  label: string
  value: string | number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}
interface Props extends React.ComponentProps<typeof Select> {
  options?: Option[]
}

function TagSelect({ options, ...props }: Props) {
  return (
    <Select allowClear={true} {...props}>
      {options?.map((item) => (
        <Select.Option key={item.value} value={item.value}>
          <Tag color={item.tag}>{item.label}</Tag>
        </Select.Option>
      ))}
    </Select>
  )
}

export default TagSelect
