import { User } from './user.model'

export const me = (req, res) => {
  res.status(200).json({ data: req.user })
}

export const updateMe = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
      .lean()
      .exec()

    res.status(200).json({ data: user })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getUser = (req, res) => {
  res.status(200).json({ data: 'GOT THE USER' });
}

export const updateUser = (req, res) => {
  res.status(200).json({ data: 'UPDATED THE USER' });
}

export const createUser = (req, res) => {
  res.status(200).json({ data: 'CREATED THE USER' });
}

export const deleteUser = (req, res) => {
  res.status(200).json({ data: 'DELETED THE USER' });
}